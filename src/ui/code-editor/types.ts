export interface CodeEditorProps {
  minHeight: string; // Importante controlar el minHeight , el maxHeight y el height, el editor se maneja por un texarea encima de los htmlinsertados en el nodo principal
  value?: string; // valor, es buena idea pasarle el valor al editor, por ejemplo si viene de un estado del usuario lo seteamos y cambia dinamicamente
  language?: string; // lenguaje facilmente
  onChange?: (value: string | undefined | null) => void; // onchange con este evento podemos obtener el valor
  height?: string;
  placeholder?: string; // simplemente placeholder
  classNameContainer?: string; // clases del contendor principal
  maxHeight: string; // maxHeight
}
