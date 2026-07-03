Feature: Recibir alertas por parámetros fuera de rango
  Como técnico operador
  Quiero recibir alertas cuando un parámetro del agua esté fuera de rango
  Para tomar acción correctiva de forma inmediata

  Scenario: Alerta generada automáticamente (Camino Feliz)
    Given el sistema de procesamiento en la nube recibe una lectura de turbidez enviada por un sensor IoT
    And el valor registrado supera el rango máximo permitido por la normativa
    When el sistema procesa y guarda la medición
    Then se genera una alerta crítica automática en el sistema
    And se envía una notificación push al dashboard del técnico operador con la ubicación exacta del punto afectado

  Scenario: Retorno a la normalidad (Camino Alterno)
    Given un punto de monitoreo se encuentra en estado de "Alerta"
    When el sistema recibe una nueva lectura continua durante 15 minutos con valores dentro del rango seguro
    Then el sistema cambia el estado visual del punto a "Normal"
    And registra en el historial el cierre de la alerta
