const maxItemAssociation = function(bays) {
    const allElements = bays.reduce((items,current,index) => { 
        let currentLength = current.length - 1

        for (let i = 0; i <= currentLength; i++) {
            items.push({key: index, item: current[i]})
        }

        return items
    }, [])
    
    bays.map((el,index,array) => {
        let collision = array.reduce((b,a) => {
            let aLength = a.length - 1
            
            for (let i = 0; i <= aLength; i++) {
                if (el.indexOf(a[i]) == -1) {
                    return true
                }
            }

            return false
        }, false)
        
        for (obj of allElements) {
            if (collision && el.indexOf(obj.item) == -1) {
                array[index].push(obj.item)
            }
        }
    })

    const baysLength = bays.reduce((lens,current,index) => {
        lens.push([index,current.length])

        return lens
    }, [])

    for (item of baysLength) {
        for (item2 of baysLength) {
            if (item[1] > item2[1]) {
                return bays[item[0]] 
            }
        }
    }

    return false
}

console.log(maxItemAssociation([['a','b'],['a','c'],['d','e']]))
