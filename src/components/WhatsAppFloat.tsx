import { makeWhatsAppLink } from "@/lib/whatsapp";
import styles from "./WhatsAppFloat.module.css";
export default function WhatsAppFloat(){return <a className={styles.float} href={makeWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="Fale com a THT Turtles pelo WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"/><path d="M8.2 8.1c.3-.7.6-.7 1-.7h.4c.2 0 .4.1.5.5l.7 1.6c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2.1 1.9.3.2.5.1.7-.1l.8-.9c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.5.4-1.2.6-2 .4-1-.2-2.3-.8-3.7-2.1-1.2-1.1-2-2.5-2.2-3.4-.2-.8 0-1.5.5-2.1Z"/></svg><span>Vamos conversar</span></a>;
}
