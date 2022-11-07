import { DetalleVenta } from "./detalleVenta";

export interface Venta {
    nroFac: number;
    id_cliente: number;
    detalle_venta : DetalleVenta[];
}