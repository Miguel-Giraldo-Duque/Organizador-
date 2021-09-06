import random

areas = ["habilidades blandas","ingles","matematicas","programacion"]
modulos = [1,2,3]

aleatorio_areas =random.sample(areas,3)


for  area in aleatorio_areas:
   r = random.choice(modulos)
   print(area + " " + r)
