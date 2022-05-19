import dns from 'dns'
import { Resolver } from 'dns/promises'

async function pesquisaDNS() {
  const urlPesquisada = 'letscode.com.br'

  console.time('busca de ipsv4')
  const ipsv4 = await dns.promises.resolve4(urlPesquisada)
  console.timeEnd('busca de ipsv4')
  console.log(ipsv4)
  const provedoresDeDNS = await dns.promises.resolveNs(urlPesquisada)
  console.log(provedoresDeDNS)

  const ipsv4NS = await dns.promises.resolve4(provedoresDeDNS[0])
  console.log(ipsv4NS)

  const dnsResolverDaAWS = new Resolver()
  dnsResolverDaAWS.setServers([ipsv4NS[0]])

  console.time('busca de ipsv4')
  const ipsv4ComProvedorDeDNSDaAWS = await dnsResolverDaAWS.resolve4(
    urlPesquisada
  )
  console.timeEnd('busca de ipsv4')
  console.log(ipsv4ComProvedorDeDNSDaAWS)
}

pesquisaDNS()
