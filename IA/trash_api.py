import tkinter as tk
from tkinter import filedialog
from PIL import Image, ImageTk
import openai
import base64
import os
from dotenv import load_dotenv

# Cargar variables desde .env
load_dotenv()

# Obtener la clave de API desde el entorno
api_key = os.getenv("OPENAI_API_KEY")

# Inicializar cliente de OpenAI
openai.api_key = api_key
client = openai

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
                            "Observa esta imagen de basura. Dime qué objeto contiene específicamente "
                            "y su categoría entre: Electrónica, Orgánica, Reciclable, No Reciclable, o Especial/Peligroso. "
                            "Formato: 'Es [objeto]. \nCategoría: [tipo]'"
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

def seleccionar_imagen(event=None):
    ruta = filedialog.askopenfilename(filetypes=[("Imágenes", "*.png *.jpg *.jpeg")])
    if ruta:
        img = Image.open(ruta)
        img = img.resize((220, 220))
        img_tk = ImageTk.PhotoImage(img)
        panel_imagen.config(image=img_tk)
        panel_imagen.image = img_tk

        etiqueta_resultado.config(text="🧠 Analizando con IA...")
        ventana.update()

        resultado = clasificar_basura_con_chatgpt(ruta)
        etiqueta_resultado.config(text=f"📦 Resultado:\n{resultado}")

# --- Interfaz Principal ---
ventana = tk.Tk()
ventana.title("IA Visual - Clasificación de Basura")
ventana.geometry("900x600")
ventana.configure(bg="#ffffff")

# --- Área principal ---
contenido = tk.Frame(ventana, bg="#ffffff")
contenido.pack(expand=True, fill="both")

titulo = tk.Label(contenido, text="Subir Imagen a IA", font=("Segoe UI", 18, "bold"), bg="#ffffff")
titulo.pack(pady=20)

zona_subida = tk.Label(
    contenido,
    text="Haz clic en el botón para subir una imagen",
    font=("Segoe UI", 11),
    bg="#f5f5f5",
    fg="#000000",
    width=60,
    height=4,
    bd=1,
    relief="solid",
    cursor="hand2"
)
zona_subida.pack(pady=10)
zona_subida.bind("<Button-1>", seleccionar_imagen)

panel_imagen = tk.Label(contenido, bg="#ffffff")
panel_imagen.pack(pady=10)

btn_subir = tk.Button(contenido, text="Enviar a IA", font=("Segoe UI", 12, "bold"),
                      bg="#3f51b5", fg="white", padx=20, pady=10, command=seleccionar_imagen)
btn_subir.pack(pady=10)

etiqueta_resultado = tk.Label(contenido, text="", font=("Segoe UI", 12), bg="#ffffff", wraplength=500, justify="center")
etiqueta_resultado.pack(pady=10)

ventana.mainloop()