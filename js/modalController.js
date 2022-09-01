import { form } from "./elems.js"
import { hidePreview } from "./previewController.js"

const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen)
}

const closeModal = (modal, classOpen) => {
    modal.classList.remove(classOpen)
    hidePreview()
    form.reset()
}

export const modalController = (obj) => {
    const { modal, modalBtn, classOpen, classClose } = obj

    modalBtn.addEventListener('click', () => {
        openModal(modal, classOpen)
    })

    modal.addEventListener('click', (evt) => {
        const target = evt.target

        if (target === modal || target.classList.contains(classClose)) {
            closeModal(modal, classOpen)
        }
    })
}

