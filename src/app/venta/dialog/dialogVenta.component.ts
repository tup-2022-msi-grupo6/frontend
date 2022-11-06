import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DetalleVenta } from "src/app/models/detalleVenta";
import { Venta } from "src/app/models/venta";
import { ApiventaService } from "src/app/services/apiventa.service";



@Component({
    templateUrl: 'dialogVenta.component.html'
})

export class DialogVentaComponent {

    public venta: Venta;
    public detalle_venta: DetalleVenta[];

    public detalleForm = this.formBuilder.group({
        cantidad: [0, Validators.required],
        codigo_producto: [1, Validators.required],
        importe_bruto: [0, Validators.required]
    });

    

    constructor(public dialogRef: MatDialogRef<DialogVentaComponent>, public snackBar: MatSnackBar, private formBuilder: FormBuilder, public apiVenta: ApiventaService) {
        this.detalle_venta = [];
        this.venta = {id_cliente: 1, detalle_venta: []};
    }

    close() {
        this.dialogRef.close();
    }

    addDetalle() {
        this.detalle_venta.push(this.detalleForm.value as any);
    }

    addVenta() {
        this.venta.detalle_venta = this.detalle_venta;
        this.apiVenta.add(this.venta).subscribe(res => {
                this.dialogRef.close();
                this.snackBar.open('venta hecha con exito', '', {
                    duration: 2000
                });
        });
    }
}
