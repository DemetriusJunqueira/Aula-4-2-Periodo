def processar_medias(nomes, notas1, notas2):
    resultados = []
    for i in range(len(nomes)):
        media = (notas1[i] + notas2[i]) / 2
        situacao = "AP" if media >= 7 else "RP"
        resultados.append((nomes[i], media, situacao))
    return resultados

# Dados de exemplo
nomes = [f"Aluno{i+1}" for i in range(15)]
notas1 = [7, 6, 8, 9, 4, 10, 5, 6, 7, 8, 9, 4, 10, 6, 8]
notas2 = [5, 7, 6, 9, 3, 8, 7, 5, 7, 8, 9, 5, 7, 6, 8]

resultados = processar_medias(nomes, notas1, notas2)
print("Aluno\tMédia\tSituação")
for nome, media, situacao in resultados:
    print(f"{nome}\t{media:.1f}\t{situacao}")
