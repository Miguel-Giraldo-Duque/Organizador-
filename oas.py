import random

areas = ["Finansas","ingles","matematicas","programacion"]
modulos = [1,2,3]

aleatorio_areas =random.sample(areas,3)

for area in aleatorio_areas:
    aleatorio_modulos = random.choice(modulos)
    print (area + " " +str (aleatorio_modulos))



