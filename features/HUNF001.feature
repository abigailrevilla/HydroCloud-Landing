Feature: Seguridad de acceso
  Como responsable institucional
  Quiero que la plataforma proteja mis credenciales de acceso
  Para evitar accesos no autorizados al sistema

  Scenario: Bloqueo de cuenta por intentos fallidos
    Given un usuario intenta ingresar al panel de administración institucional
    When introduce una contraseña incorrecta por 5 veces consecutivas en menos de 10 minutos
    Then el sistema bloquea temporalmente la cuenta por 15 minutos
    And envía un correo de advertencia de seguridad al email registrado
