import { DetalleVenta } from "./detalleVenta";

export interface Venta {
    id_cliente: number;
    detalle_venta : DetalleVenta[];
}