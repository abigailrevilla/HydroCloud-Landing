Feature: Visualizar puntos de monitoreo
  Como técnico operador
  Quiero visualizar los puntos de monitoreo registrados
  Para conocer el estado general del agua en mi zona

  Scenario: Visualización correcta de puntos en el mapa
    Given el técnico operador ha iniciado sesión en el dashboard de HydroCloud
    And existen puntos de monitoreo registrados en su zona asignada
    When accede a la vista principal del mapa de monitoreo
    Then el sistema muestra todos los puntos con su estado actual mediante un código de colores
    And cada punto indica su ubicación geográfica exacta

  Scenario: Zona sin puntos de monitoreo registrados
    Given el técnico operador ingresa a una zona sin sensores instalados
    When accede a la vista principal del mapa de monitoreo
    Then el sistema muestra un mensaje indicando que no hay puntos registrados
    And sugiere contactar al equipo de despliegue
