def soma_multiplos_5(matriz):
    soma = 0
    for linha in matriz:
        soma += sum(x for x in linha if x % 5 == 0)
    return soma

# Matriz exemplo
matriz = [
    [5, 10, 15],
    [20, 25, 30],
    [35, 40, 45]
]

print(f"A soma dos múltiplos de 5 é: {soma_multiplos_5(matriz)}")
