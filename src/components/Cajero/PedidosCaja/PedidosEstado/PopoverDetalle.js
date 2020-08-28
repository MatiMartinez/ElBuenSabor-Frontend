import React from "react";
import { PopoverHeader, PopoverBody, UncontrolledPopover } from "reactstrap";

export default function PopoverDetalle(props) {
  return (
    <td>
      <button
        className="btn btn-info rounded-0"
        type="button"
        id={"PopoverFocus-" + props.index}
      >
        Ver
      </button>
      <UncontrolledPopover
        trigger="focus"
        placement="bottom"
        target={"PopoverFocus-" + props.index}
      >
        <PopoverHeader>Detalles</PopoverHeader>
        <PopoverBody>{props.children}</PopoverBody>
      </UncontrolledPopover>
    </td>
  );
}
