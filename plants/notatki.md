*** Focus change in the "Service" section ***
1. Ustawic eventListenera na element _buttons panel_
2. Stworzyc div z klasa _overlay_
3. Ustawic go na wszystkie elementy z klasa _infobox_
4. Dac mu _opacity_ z blurem
5. Nadac poszczegolnym divom z klasa infobox-overlay data-atrybuty odpowiadajace przyciskom
6. Przy kliknieciu na okreslonego button'a wywolac odpowiednia funkcje-handler
7. Funkcja-handler  
  7.1 Wybiera te elementy z klasa _infobox-overlay_, ktore nie maja data-atrybutu zwiazanego z kliknietym przyciskiem
   7.1.1 Pobiera kolekcje elementow z klasa _infobox-overlay_ przez querySelectorAll
   7.1.2 Leci przez kolekcje za pomoca petli i eliminuje elementy z tym data-atrybutem
  7.2 Ustawia im blur - dodac klase z blurem
  7.2 Wybiera te elementy, ktorych data-atrybut odpowiada kliknietemu button'owi - usunac klase blur
  7.3 



*** Contact section's select ***