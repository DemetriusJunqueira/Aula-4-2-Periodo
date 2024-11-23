def controle_reservas(cadeiras, reservas):
    for reserva in reservas:
        if cadeiras[reserva - 1] == 0:
            cadeiras[reserva - 1] = 1  # Reservar
        else:
            print(f"Cadeira {reserva} já está ocupada.")
    return cadeiras

# Exemplo
cadeiras = [0] * 100  # 100 cadeiras inicialmente livres
reservas = [1, 2, 3, 2, 50, 1]  # Solicitações de reserva
cadeiras = controle_reservas(cadeiras, reservas)
print(f"Estado das cadeiras: {cadeiras}")
