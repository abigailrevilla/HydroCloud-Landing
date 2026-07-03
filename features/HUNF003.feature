Feature: Disponibilidad del sistema
  Como responsable institucional
  Quiero que la plataforma esté disponible incluso ante fallas
  Para garantizar el monitoreo continuo del agua

  Scenario: Caída parcial del servidor principal
    Given el nodo de servidor principal experimenta una falla de hardware
    When el balanceador de carga detecta la inactividad
    Then el tráfico se redirige automáticamente al servidor de respaldo en la nube
    And el servicio de recolección de datos IoT mantiene un uptime del 99.9% sin perder paquetes de información
