import { Injectable } from '@angular/core';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ImpresionService {

  constructor() { }

  async imprimir(encabezado: string[], cuerpo: Array<any>, titulo: string) {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: 'letter'
    });

    doc.text(titulo, doc.internal.pageSize.width / 2, 25, {align: 'center'})

    autoTable(doc, {
      head: [encabezado],
      body: cuerpo,
    })

    console.log(cuerpo)
    doc.save('listado.pdf')
  }
}
