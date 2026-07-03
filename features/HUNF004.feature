Feature: Usabilidad móvil
  Como familia usuaria
  Quiero que el sistema funcione bien en dispositivos móviles pequeños
  Para poder consultar la calidad del agua desde cualquier celular

  Scenario: Legibilidad en dispositivos móviles pequeños
    Given una familia ingresa a la aplicación desde un dispositivo de gama de entrada (pantalla de 4.7 pulgadas)
    When visualiza el semáforo de calidad de agua
    Then los elementos visuales se auto-ajustan al ancho de la pantalla sin superponerse
    And el texto explicativo mantiene un tamaño mínimo de 16px para garantizar su lectura por adultos mayores
