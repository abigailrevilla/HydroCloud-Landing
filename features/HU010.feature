Feature: Consultar estado general del agua
  Como familia usuaria
  Quiero consultar el estado general del agua de mi zona
  Para saber si es segura para el consumo

  Scenario: Consulta de estado seguro (Camino Feliz)
    Given la familia usuaria abre la aplicación móvil y tiene su ubicación configurada en "Comunidad Alfa"
    When ingresa a la vista principal de consulta ciudadana
    Then la aplicación muestra un indicador visual en color verde
    And despliega el texto "El agua de su zona es segura para el consumo"
