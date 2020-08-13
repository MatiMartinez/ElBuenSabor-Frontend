import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

export default function EnProcesoCard(props) {
  const { pedido } = props;
  return (
    <Card className="div-shadow">
      <CardHeader
        className="text-center text-white p-1"
        style={{ background: "#0073e5" }}
      >
        <b className="float-left ml-2">{pedido.numero}</b>
        {pedido.estado.charAt(0).toUpperCase() + pedido.estado.slice(1)}
      </CardHeader>
      <CardBody className="p-2">
        <CardTitle>
          <b>Detalle</b>
          <b className="text-muted float-right">
            Demora: {pedido.minutosDemora.toFixed(2)}
          </b>
        </CardTitle>
        {pedido.detalle.platos.map((plato, index) => (
          <CardText key={index}>
            {plato.cantidad} {plato.item_id.denominacion} {"\n"}
          </CardText>
        ))}
        {pedido.detalle.reventas.map((reventa, index) => (
          <CardText key={index}>
            {reventa.cantidad} {reventa.item_id.denominacion}
          </CardText>
        ))}
        <div className="d-flex">{props.children}</div>
      </CardBody>
    </Card>
  );
}
