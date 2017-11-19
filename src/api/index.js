import axios from 'axios';

export function searchChCatalogos({
  nombre,
  codpostal,
  codprov,
  codfi,
}) {
  const parameters = 'select=*,CH_FINALIDAD(CODFI, DESFI),CH_MUNICIPIOS(CODMU, municipio, CH_PROVINCIAS(CODPROV, NOMBRE, CODAUTO, CH_CCAA(CODAUTO, AUTONOMIA, TEXTO_AUTONOMIA)))';
  const url = `http://localhost:3000/rpc/search_ch_catalogos?${parameters}`;
  return axios.post(url, {
    nombre,
    codpostal,
    codprov,
    codfi,
  }).then(r => r.data);
}

export function foo() {

}
