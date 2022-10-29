import { addClass, removeClass } from './utils-class';

const sliders = document.getElementsByClassName("slider");

for (let index = 0; index < sliders.length; index++) {
    const slider = sliders[index];

    const items = slider.querySelectorAll(".slider .item");
    const preview = slider.querySelector("div > .preview");

    for (let index = 0; index < items.length; index++) {
        const itemTrigger = items[index];

        itemTrigger.addEventListener("click", function() {
            const dataImg = this.attributes?.["data-img"]?.value;
            console.log(dataImg);
            for (let index = 0; index < items.length; index++) {
                const triggerNeedToRemoved = items[index];

                removeClass(triggerNeedToRemoved, "selected")
                
            }
            addClass(itemTrigger, "selected")

            preview.querySelector("img").setAttribute("src", dataImg)
        })
        
    }
    
}