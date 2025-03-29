import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk
import openai
import base64

client = openai.OpenAI(api_key="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")  

def clasificar_basura_con_chatgpt(imagen_path):
    with open(imagen_path, "rb") as img_file:
        img_base64 = base64.b64encode(img_file.read()).decode("utf-8")

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": (
                            "Observa esta imagen de basura. Dime qué objeto contiene específicamente (por ejemplo: cartón, botella de plástico, cáscara de plátano, cable, pila, etc). "
                            "Después dime su categoría correspondiente entre las siguientes: "
                            "Electrónica, Orgánica, Reciclable, No Reciclable, o Especial/Peligroso. "
                            "Respóndeme en este formato: 'Es [objeto]. \n Categoría: [tipo]'."
                            "Electrónica (celulares, cables, electrodomésticos), "
                            "Orgánica (comida, cáscaras, jardín), "
                            "Reciclable (plástico, cartón, papel, vidrio, metal), "
                            "No Reciclable (basura general, bolsas metalizadas, contaminado), "
                            "Especial o Peligroso (pilas, aceite, medicamentos, focos, químicos/pinturas). "
                            "Respóndeme solo con la categoría, sin explicación extra."
                        )
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{img_base64}"
                        }
                    }
                ]
            }
        ],
        max_tokens=100
    )

    return response.choices[0].message.content

def seleccionar_imagen():
    ruta = filedialog.askopenfilename(filetypes=[("Imágenes", "*.png *.jpg *.jpeg")])
    if ruta:
        # Mostrar la imagen en la GUI
        img = Image.open(ruta)
        img = img.resize((250, 250))
        img_tk = ImageTk.PhotoImage(img)
        panel_imagen.config(image=img_tk)
        panel_imagen.image = img_tk

        # Llamar a la IA y mostrar resultado
        etiqueta_resultado.config(text="Analizando imagen...")
        ventana.update()
        resultado = clasificar_basura_con_chatgpt(ruta)
        etiqueta_resultado.config(text=f" {resultado}")

# GUI con Tkinter
ventana = tk.Tk()
ventana.title("Clasificador de Basura - GPT-4")
ventana.geometry("400x450")

btn_subir = tk.Button(ventana, text="Subir imagen", command=seleccionar_imagen)
btn_subir.pack(pady=10)

panel_imagen = tk.Label(ventana)
panel_imagen.pack()

etiqueta_resultado = tk.Label(ventana, text="Esperando imagen...", font=("Arial", 14))
etiqueta_resultado.pack(pady=20)

ventana.mainloop()
