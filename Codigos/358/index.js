def classificar_mercadorias(custos, precos):
    categorias = {'baixo': 0, 'médio': 0, 'alto': 0}
    for custo, preco in zip(custos, precos):
        lucro = ((preco - custo) / custo) * 100
        if lucro < 10:
            categorias['baixo'] += 1
        elif lucro <= 20:
            categorias['médio'] += 1
        else:
            categorias['alto'] += 1
    return categorias

# Dados de exemplo
custos = [100, 200, 300, 400, 500]
precos = [110, 250, 330, 480, 600]

categorias = classificar_mercadorias(custos, precos)
print("Classificação de mercadorias:")
print(f"Baixo lucro: {categorias['baixo']}")
print(f"Médio lucro: {categorias['médio']}")
print(f"Alto lucro: {categorias['alto']}")
