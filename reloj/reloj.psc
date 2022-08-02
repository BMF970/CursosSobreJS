Algoritmo reloj 
	hrs=0//23
	min=0//58
	sec=0//58
			Mientras sec < 59 Hacer
				sec = sec + 1
				Escribir sec, "segundo(s)"
				Si sec = 59 Entonces
					sec = 0
					min = min + 1
					Escribir min, "minuto(s)"
					Si min = 59 Entonces
						min = 0
						hrs = hrs + 1
						Escribir hrs "Hora(s)"
						Si hrs = 24 Entonces
							hrs = 0
//							Escribir hrs
//							Escribir min
//							Escribir sec
						Fin Si
					Fin Si
				Fin Si
			Fin Mientras
FinAlgoritmo