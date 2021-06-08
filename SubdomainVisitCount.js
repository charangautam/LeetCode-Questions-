/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    const map = {}
    const output = []
    
    for(let domain of cpdomains) {
        domain = domain.split(' ')
        let count = Number(domain[0])
        domain = domain[1].split('.')
        
        while(domain.length > 0) {
            map[domain.join('.')] ? map[domain.join('.')] += count : map[domain.join('.')] = count
            domain.shift()
        }
    }
    
    for(let key in map) {
        output.push(`${map[key]} ${key}`)
    }
    return output
};

