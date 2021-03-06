"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../../../utils/component");
const models_1 = require("../../../models");
const components_1 = require("../../components");
let TypeOperatorTypeSerializer = class TypeOperatorTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TypeOperatorType;
    }
    toObject(typeOperator, obj) {
        obj = obj || {};
        obj.operator = typeOperator.operator;
        obj.target = this.owner.toObject(typeOperator.target);
        return obj;
    }
};
TypeOperatorTypeSerializer = __decorate([
    component_1.Component({ name: 'serializer:type-operator-type' })
], TypeOperatorTypeSerializer);
exports.TypeOperatorTypeSerializer = TypeOperatorTypeSerializer;
//# sourceMappingURL=type-operator.js.map