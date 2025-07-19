import * as adapterPattern from './adapter.js'
import * as bridgePattern from './bridge.js'
import * as compositePattern from './composite.js'
import * as decoratorPattern from './decorator.js' 
import * as facadaPattern from './facade.js'
import * as proxyPattern from './proxy.js'
export const execute = () => {
   adapterPattern.executePattern();
   bridgePattern.executePattern();
   compositePattern.executePattern();
   decoratorPattern.executePattern();
   facadaPattern.executePattern(); 
   proxyPattern.executePattern();
}
