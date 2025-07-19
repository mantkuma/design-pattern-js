import * as factorPattern from './factory.js'
import * as singletonPattern from './singleton.js'
import * as prototypePattern from './prototype.js'
import * as builderPattern from './builder.js'


export const execute = () => {
    factorPattern.executePattern();
    singletonPattern.executePattern();
    prototypePattern.executePattern();
    builderPattern.executePattern();
}
