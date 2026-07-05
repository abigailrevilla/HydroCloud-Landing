Feature: Recibir alertas claras sobre la calidad del agua
  Como familia usuaria
  Quiero recibir alertas claras sobre la calidad del agua
  Para proteger la salud de mi hogar

  Scenario: Alerta clara enviada a la familia
    Given una familia usuaria tiene la app móvil activa con su comunidad configurada
    And el sistema detecta que un punto de monitoreo cercano cambia a estado de "Alerta"
    When se genera la alerta en el sistema
    Then la familia recibe una notificación push con un mensaje simple
    And la notificación incluye una recomendación básica de acción

  Scenario: Familia sin conexión a internet al momento de la alerta
    Given se genera una alerta crítica en la comunidad de una familia usuaria
    When la familia no tiene conexión a internet en ese momento
    Then el sistema almacena la notificación pendiente
    And la envía automáticamente en cuanto el dispositivo recupera conexión
