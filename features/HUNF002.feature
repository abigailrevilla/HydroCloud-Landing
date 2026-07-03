Feature: Rendimiento de carga
  Como técnico operador
  Quiero que la plataforma cargue rápidamente incluso con muchos datos
  Para monitorear la información sin demoras

  Scenario: Carga de mapa interactivo con Data Table
    Given el técnico operador inicia sesión con una conexión a internet estándar (4G/Wifi)
    When accede al dashboard principal que contiene los siguientes volúmenes de datos:
      | Elemento         | Cantidad |
      | Nodos IoT        | 500      |
      | Historial (mes)  | 15000    |
      | Alertas activas  | 12       |
    Then el sistema debe renderizar el mapa completo y todos sus marcadores en menos de 3 segundos
