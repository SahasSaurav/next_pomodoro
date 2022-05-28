import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
interface PortalsProps {
	children: React.ReactNode;
	selector: string;
}

const Portals: React.FC<PortalsProps> = (props) => {
	const { children, selector } = props;

	const portalRef = useRef<HTMLDivElement | null>(null);
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		portalRef.current = document.querySelector(selector);
		setMounted(true);
	}, [selector]);

	return mounted ? createPortal(children, portalRef.current as Element) : null;
};

export default Portals;
