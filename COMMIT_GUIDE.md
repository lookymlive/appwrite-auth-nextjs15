# Guía de Commits

Esta guía establece las convenciones para crear mensajes de commit consistentes y significativos en nuestro proyecto.

## Formato Básico

```
<tipo>(<alcance>): <descripción corta>

- <cambio detallado 1>
- <cambio detallado 2>
- <cambio detallado 3>
```

## Tipos de Commits

- `feat`: Nueva característica o funcionalidad
- `fix`: Corrección de errores
- `docs`: Cambios en documentación
- `style`: Cambios que no afectan el significado del código (espacios, formato, etc.)
- `refactor`: Cambios de código que no corrigen errores ni añaden funcionalidades
- `test`: Añadir o modificar pruebas
- `chore`: Cambios en el proceso de build, herramientas, dependencias, etc.

## Alcance (Opcional)

El alcance debe ser el área del proyecto que se está modificando:
- `auth`: Autenticación
- `ui`: Interfaz de usuario
- `api`: Endpoints o lógica de API
- `db`: Base de datos
- `deps`: Dependencias
- etc.

## Ejemplos Prácticos

### Nueva Característica
```
feat(auth): implementar login con Google

- Añadir componente de botón OAuth
- Configurar endpoints de autenticación
- Actualizar manejo de sesión de usuario
```

### Corrección de Errores
```
fix(ui): corregir diseño responsivo

- Ajustar layout en dispositivos móviles
- Corregir overflow en sidebar
- Actualizar breakpoints de media queries
```

### Actualización de Dependencias
```
chore(deps): actualizar dependencias

- Actualizar Next.js a v15.0.4
- Actualizar React a v19.0.0
- Actualizar tipos de TypeScript
```

## Consejos Adicionales

1. La descripción corta debe estar en tiempo presente: "añadir" en lugar de "añadido"
2. No uses punto final en la descripción corta
3. Los cambios detallados deben ser claros y específicos
4. Si el cambio rompe compatibilidad, añade `BREAKING CHANGE:` en el cuerpo del mensaje

## Uso con Extensiones de GitHub

Si estás usando extensiones de GitHub en tu editor:
1. Stage tus cambios
2. Usa este formato para escribir tu mensaje de commit
3. Sincroniza con el repositorio remoto usando la extensión

Recuerda: Un buen mensaje de commit ayuda a otros desarrolladores (y a ti mismo en el futuro) a entender rápidamente qué cambios se realizaron y por qué.
