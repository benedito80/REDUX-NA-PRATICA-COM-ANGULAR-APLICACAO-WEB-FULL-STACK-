export class Usuarios {
  _id: any;
  usuario: string;
  cns: string;
  bairro: string;
  acs: string;
  hipertenso: boolean;
  diabete: boolean;

  constructor(
    usuario?: string,
    cns?: string,
    bairro?: string,
    acs?: string,
    hipertenso?: boolean,
    diabete?: boolean,
  ) {
    this.usuario = usuario || '';
    this.cns = cns || '';
    this.bairro = bairro || '';
    this.acs = acs || '';
    this.hipertenso = hipertenso || false;
    this.diabete = diabete || false;

  }
}
