def soma_quadrados_abaixo_diagonal(matriz):
    N = len(matriz)
    soma = 0
    for i in range(N):
        for j in range(N):
            if i + j > N - 1 and matriz[i][j] % 2 != 0:
                soma += matriz[i][j] ** 2
    return soma

# Matriz exemplo
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(f"A soma dos quadrados é: {soma_quadrados_abaixo_diagonal(matriz)}")
