import 'package:flutter/material.dart';
import 'package:reciclaje_app/pages/home_page.dart';
import 'package:reciclaje_app/pages/image_page.dart';
import 'package:reciclaje_app/pages/login_page.dart';
import 'package:reciclaje_app/pages/map_page.dart';
import 'package:reciclaje_app/pages/register_page.dart';
import 'package:reciclaje_app/services/api_services.dart'; // Importa el servicio de API

// Definir las rutas como constantes
class AppRoutes {
  static const String homePage = 'home_page';
  static const String loginPage = 'login_page';
  static const String registerPage = 'register_page';
  static const String mapPage = 'map_page';
  static const String imagePage = 'image_page';
}

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  Future<bool> _checkIfLoggedIn() async {
    final apiService = ApiService();
    try {
      // Llama al endpoint que verifica si el usuario está autenticado
      final response = await apiService.getData('users');
      return response['isLoggedIn'] ??
          false; // Devuelve true si está autenticado
    } catch (e) {
      // Maneja errores (por ejemplo, conexión fallida)
      print('Error al verificar el estado de inicio de sesión: $e');
      return false; // Por defecto, considera que no está autenticado
    }
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<bool>(
      future: _checkIfLoggedIn(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          // Muestra una pantalla de carga mientras se verifica el estado
          return const MaterialApp(
            home: Scaffold(body: Center(child: CircularProgressIndicator())),
          );
        } else if (snapshot.hasError) {
          // Maneja errores en la Future
          return MaterialApp(
            home: Scaffold(
              body: Center(
                child: Text(
                  'Error al cargar la aplicación',
                  style: TextStyle(color: Colors.red, fontSize: 18),
                ),
              ),
            ),
          );
        } else {
          // Decide la ruta inicial según el estado de inicio de sesión
          final bool isLoggedIn = snapshot.data ?? false;
          return MaterialApp(
            debugShowCheckedModeBanner: false,
            home: isLoggedIn ? const HomePage() : const LoginPage(),
            routes: {
              AppRoutes.registerPage: (context) => const RegisterPage(),
              AppRoutes.loginPage: (context) => const LoginPage(),
              AppRoutes.homePage: (context) => const HomePage(),
              AppRoutes.mapPage: (context) => const MapPage(),
              AppRoutes.imagePage: (context) => const ImagePage(),
            },
            theme: ThemeData(
              scaffoldBackgroundColor: Colors.white,
              appBarTheme: const AppBarTheme(
                backgroundColor: Colors.black,
                toolbarHeight: 20,
              ),
            ),
          );
        }
      },
    );
  }
}
