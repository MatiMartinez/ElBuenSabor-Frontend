import React from "react";
import { PopoverHeader, PopoverBody, UncontrolledPopover } from "reactstrap";

export default function PopoverDetalle(props) {
  return (
    <div>
      <button
        className="btn btn-info rounded-0"
        type="button"
        id={"PopoverFocus-" + props.identif}
      >
        Ver
      </button>
      <UncontrolledPopover
        trigger="focus"
        placement="bottom"
        target={"PopoverFocus-" + props.identif}
      >
        <PopoverHeader>Detalles</PopoverHeader>
        <PopoverBody>{props.children}</PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}
