def analisar_sequencia(numeros):
    pares = sum(1 for n in numeros if n % 2 == 0)
    impares = len(numeros) - pares
    media = sum(numeros) / len(numeros) if numeros else 0
    return pares, impares, media

# Sequência de exemplo
numeros = [1, 2, 3, 4, 5, 6]
pares, impares, media = analisar_sequencia(numeros)
print(f"Pares: {pares}, Ímpares: {impares}, Média: {media:.2f}")
