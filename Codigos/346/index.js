def calcular_fatorial(numero):
    fatorial = 1
    for i in range(1, numero + 1):
        fatorial *= i
    return fatorial

# Exemplo de uso
numero = 5  # Número a ser calculado
print(f"O fatorial de {numero} é: {calcular_fatorial(numero)}")
