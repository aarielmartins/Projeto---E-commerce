import { useState } from 'react'
import { Action, Item, Itens, Modal, ModalContent } from './styles'
import { GalleryItem } from '../../pages/Home'
import Section from '../Section'
import magic from '../../assets/images/magic.png'
import fechar from '../../assets/images/fechar.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: magic
  },
  {
    type: 'image',
    url: magic
  },
  {
    type: 'image',
    url: magic
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/855QySYhW1s?si=P4dLYCd7G8zE1Gje'
  }
]

type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

//
interface ModalStatate extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
  const [modal, setModal] = useState<ModalStatate>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Itens>
          {itens.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Itens>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            // IFRAME É USADO PARA INSERIR VÍDEOS E OFREMEBORDER PARA RETIRAR BORDA, MAS É UM FORMATO OBSOLETO
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
