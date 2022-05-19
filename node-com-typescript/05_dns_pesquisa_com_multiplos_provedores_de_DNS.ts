import dns from 'dns'
import { Resolver } from 'dns/promises'

async function pesquisaDNS() {
  const urlPesquisada = 'letscode.com.br'

  // Realizando uma pesquisa pelo ip do domínimo letscode.com.br usando provedores de DNS padrão
  console.time('busca de ipsv4')
  const ipsv4 = await dns.promises.resolve4(urlPesquisada)
  console.timeEnd('busca de ipsv4')
  console.log(ipsv4)

  // Descobrindo provedor de DNS usado pelo site
  const provedoresDeDNS = await dns.promises.resolveNs(urlPesquisada)
  console.log(provedoresDeDNS)

  // Resgatando IP de provedor de DNS usado pelo site
  const ipsv4NSPromises = provedoresDeDNS.map(async (provedorDeDNS) =>
    dns.promises.resolve4(provedorDeDNS)
  )
  const ipsv4NS = await Promise.all(ipsv4NSPromises)
  console.log(ipsv4NS)

  // Criando novo resolvedor de DNS com os IPs dos provedores de DNS usados pelo site
  const dnsResolverDaAWS = new Resolver()
  dnsResolverDaAWS.setServers(ipsv4NS.flat())

  console.time('busca de ipsv4')
  const ipsv4ComProvedorDeDNSDaAWS = await dnsResolverDaAWS.resolve4(
    urlPesquisada
  )
  console.timeEnd('busca de ipsv4')
  console.log(ipsv4ComProvedorDeDNSDaAWS)
}

pesquisaDNS()
