import React, { useState } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

export default function PopoverDetalle(props) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  function toggle() {
    setPopoverOpen(!popoverOpen);
  }

  return (
    <td>
      <button className="btn btn-info rounded-0" type="button" id="popover">
        Ver
      </button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="popover"
        toggle={toggle}
      >
        <PopoverHeader>Detalles</PopoverHeader>
        <PopoverBody>{props.children}</PopoverBody>
      </Popover>
    </td>
  );
}
