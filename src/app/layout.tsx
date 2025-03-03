import Calculator from "./calculator";
import Document, { Html, Head } from "next/document";

class myDocument extends Document{
  return(){
    <html lang="pt-pt">
      <body>
        <Calculator/>
      </body>
    </html>
  };
}

export default myDocument;