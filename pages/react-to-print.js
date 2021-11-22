import ReactToPrint from 'react-to-print'
import { useRef } from 'react'

const pageStyle = `
body {
  margin: 0;
}

.table {
  page-break-inside: auto;
}
.row {
  page-break-inside: avoid;
  page-break-after: auto;
  border: 2px solid black;
  min-height: 250px;
}

.resume {
  position: relative;
}
.resume-wrapper {
  margin-left: 300px;
}

.sidebar {
  position: absolute;
  width: 300px;
  top: 0;
  bottom: 0;
  background-color: yellow;
}

@media print {
  @page {
    /* size: portrait; */

    size: 210mm 297mm;
  }

  .content-block,
  p {
    page-break-inside: avoid;
  }
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
  }
}

`

const XReactToPrint = () => {
  const ref = useRef()

  return (
    <>
      <ReactToPrint
        trigger={() => <a href="#">Print this out!</a>}
        content={() => ref.current}
        pageStyle={pageStyle}
      />
      <div className="resume" ref={ref}>
        <div className="resume-wrapper">
          <div className="divFooter">UNCLASSIFIED</div>
          <table>
            <thead>
              <tr>
                <td>Your header goes here</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Page body in here -- as long as it needs to be</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Your footer goes here</td>
              </tr>
            </tfoot>
          </table>
          <div className="table">
            <div className="row">
              En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no
              ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
              adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
              vaca que carnero, salpicón las más noches, duelos y quebrantos los
              sábados, lentejas los viernes, algún palomino de añadidura los
              domingos, consumían las tres partes de su hacienda. El resto della
              concluían sayo de velarte, calzas de velludo para las fiestas con
              sus pantuflos de lo mismo, los días de entre semana se honraba con
              su vellori de lo más fino. Tenía en su casa una ama que pasaba de
              los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo
              de campo y plaza, que así ensillaba el rocín como tomaba la
              podadera. Frisaba la edad de nuestro hidalgo con los cincuenta
              años, era de complexión recia, seco de carnes, enjuto de rostro;
              gran madrugador y amigo de la caza. Quieren decir que tenía el
              sobrenombre de Quijada o Quesada (que en esto hay alguna
              diferencia en los autores que deste caso escriben), aunque por
              conjeturas verosímiles se deja entender que se llama Quijana; pero
              esto importa poco a nuestro cuento; basta que en la narración dél
              no se salga un punto de la verdad En un lugar de la Mancha, de
              cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un
              hidalgo de los de lanza en astillero, adarga antigua, rocín flaco
              y galgo corredor. Una olla de algo más vaca que carnero, salpicón
              las más noches, duelos y quebrantos los sábados, lentejas los
              viernes, algún palomino de añadidura los domingos, consumían las
              tres partes de su hacienda. El resto della concluían sayo de
              velarte, calzas de velludo para las fiestas con sus pantuflos de
              lo mismo, los días de entre semana se honraba con su vellori de lo
              más fino. Tenía en su casa una ama que pasaba de los cuarenta, y
              una sobrina que no llegaba a los veinte, y un mozo de campo y
              plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba
              la edad de nuestro hidalgo con los cincuenta años, era de
              complexión recia, seco de carnes, enjuto de rostro; gran
              madrugador y amigo de la caza. Quieren decir que tenía el
              sobrenombre de Quijada o Quesada (que en esto hay alguna
              diferencia en los autores que deste caso escriben), aunque por
              conjeturas verosímiles se deja entender que se llama Quijana; pero
              esto importa poco a nuestro cuento; basta que en la narración dél
              no se salga un punto de la verdad
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
        </div>
        <div className="sidebar">
          <div className="">Title</div>
        </div>
      </div>
    </>
  )
}

export default XReactToPrint
