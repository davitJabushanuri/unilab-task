import { createPortal } from "react-dom";
import styles from "./styles/modal-backdrop.module.css";
import { useLayoutEffect, useRef } from "react";

export const ModalBackdrop = ({ children, onClose }) => {
	const modalRef = useRef(null);
	const previouslyFocusedElementRef = useRef(null);

	useLayoutEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;

		const focusableElements = Array.from(
			modal.querySelectorAll(
				'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
			),
		);
		const firstFocusableElement = focusableElements?.[0];
		const lastFocusableElement =
			focusableElements[focusableElements.length - 1];

		previouslyFocusedElementRef.current = document.activeElement;

		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				onClose();
			}

			if (e.key === "Tab") {
				if (e.shiftKey) {
					if (document.activeElement === firstFocusableElement) {
						lastFocusableElement.focus();
						e.preventDefault();
					}
				} else {
					if (document.activeElement === lastFocusableElement) {
						firstFocusableElement.focus();
						e.preventDefault();
					}
				}
			}
		};

		firstFocusableElement?.focus();
		modal.addEventListener("keydown", handleKeyDown);

		return () => {
			modal.removeEventListener("keydown", handleKeyDown);
			previouslyFocusedElementRef.current?.focus();
		};
	}, [onClose]);

	return createPortal(
		<div
			ref={modalRef}
			onClick={(e) => {
				e.stopPropagation();
				if (e.currentTarget === e.target) onClose();
			}}
			onKeyDown={(e) => e.stopPropagation()}
			className={styles.container}
			role="dialog"
			aria-modal="true"
		>
			{children}
		</div>,
		document.body,
	);
};
