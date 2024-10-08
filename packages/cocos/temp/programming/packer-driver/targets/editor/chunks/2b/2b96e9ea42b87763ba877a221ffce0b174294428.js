System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Font, Label, math, Node, Prefab, Sprite, SpriteFrame, UITransform, OnBeTarget, CharacterState, util, HolAnimation, ActionState, HolNumber, CharacterEnum, getCampHurtPercent, _dec, _class, _crd, ccclass, property, HolCharacter;

  // 获取角色坐标
  function GetCharacterCoordinatePosition(direction, row, col, type = "ordinary") {
    const result = {
      x: 0,
      y: 0
    };

    if ((row >= 1 || row <= 3) && (col >= 1 || col <= 3)) {
      result.x = (col - 1) * 195 + 170 - (type === "attack" ? 120 : 0);
      result.y = (3 - row) * 160 - 230;
      if (direction === "left") result.x *= -1;
    }

    return result;
  }

  function _reportPossibleCrUseOfBuffState(extras) {
    _reporterNs.report("BuffState", "../game/fight/buff/BuffState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOnBeTarget(extras) {
    _reporterNs.report("OnBeTarget", "../game/fight/OnBeTarget", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterState(extras) {
    _reporterNs.report("CharacterState", "../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterStateCreate(extras) {
    _reporterNs.report("CharacterStateCreate", "../game/fight/character/CharacterState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutil(extras) {
    _reporterNs.report("util", "../util/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolAnimation(extras) {
    _reporterNs.report("HolAnimation", "./HolAnimation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionState(extras) {
    _reporterNs.report("ActionState", "../game/fight/ActionState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMap(extras) {
    _reporterNs.report("FightMap", "../scenes/Fight/Canvas/FightMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHolNumber(extras) {
    _reporterNs.report("HolNumber", "./HolNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterEnum(extras) {
    _reporterNs.report("CharacterEnum", "../game/fight/character/CharacterEnum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCampHurtPercent(extras) {
    _reporterNs.report("getCampHurtPercent", "../game/fight/character/CharacterMetaState", _context.meta, extras);
  }

  _export("GetCharacterCoordinatePosition", GetCharacterCoordinatePosition);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Font = _cc.Font;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      OnBeTarget = _unresolved_2.OnBeTarget;
    }, function (_unresolved_3) {
      CharacterState = _unresolved_3.CharacterState;
    }, function (_unresolved_4) {
      util = _unresolved_4.util;
    }, function (_unresolved_5) {
      HolAnimation = _unresolved_5.HolAnimation;
    }, function (_unresolved_6) {
      ActionState = _unresolved_6.ActionState;
    }, function (_unresolved_7) {
      HolNumber = _unresolved_7.HolNumber;
    }, function (_unresolved_8) {
      CharacterEnum = _unresolved_8.CharacterEnum;
    }, function (_unresolved_9) {
      getCampHurtPercent = _unresolved_9.getCampHurtPercent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bfddQbW5lMFK9LFBS3IKq/", "HolCharacter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Font', 'Label', 'math', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HolCharacter", HolCharacter = (_dec = ccclass('HolCharacter'), _dec(_class = class HolCharacter extends Component {
        constructor(...args) {
          super(...args);
          // 动画组件
          this.$holAnimation = void 0;
          // 角色状态函数
          this.state = void 0;
          // 所处方位
          this.direction = void 0;
          //坐标
          this.coordinate = void 0;
          // 角色默认状态 攻击 受到攻击以后会回到该状态
          this.defaultState = "rest";
          // 当前战斗场景
          this.$fightMap = void 0;
        }

        get holAnimation() {
          return this.$holAnimation;
        }

        /** 
         * 初始化角色
         * create 是角色创建数据
         */
        async initCharacter(create, direction, coordinate = {
          row: 0,
          col: 0
        }, fightMap = null) {
          // 创建角色状态
          this.state = new (_crd && CharacterState === void 0 ? (_reportPossibleCrUseOfCharacterState({
            error: Error()
          }), CharacterState) : CharacterState)(create, this);
          this.direction = direction;
          this.coordinate = coordinate;
          this.$fightMap = fightMap;
          const meta = (_crd && CharacterEnum === void 0 ? (_reportPossibleCrUseOfCharacterEnum({
            error: Error()
          }), CharacterEnum) : CharacterEnum)[create.id]; // 动画设置

          const animationNode = this.node.getChildByName("HolAnimation");
          this.$holAnimation = animationNode.getComponent(_crd && HolAnimation === void 0 ? (_reportPossibleCrUseOfHolAnimation({
            error: Error()
          }), HolAnimation) : HolAnimation);
          await this.$holAnimation.initBones({
            animationScale: this.state.meta.AnimationScale,
            animationDir: this.state.meta.AnimationDir,
            animationType: this.state.meta.AnimationType,
            animationPosition: this.state.meta.AnimationPosition
          });
          this.node.addChild(animationNode);
          this.$holAnimation.playAnimation("rest"); // 阵营渲染

          this.node.getChildByName("Camp").getComponent(Sprite).spriteFrame = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load(`image/camp_icon/${meta.CharacterCamp}/spriteFrame`, SpriteFrame); // 角色位置

          const position = GetCharacterCoordinatePosition(this.direction, this.coordinate.row, this.coordinate.col);
          this.node.setPosition(position.x, position.y, this.node.position.z); // 角色面朝方向

          if (this.direction === "left") this.$holAnimation.node.setScale(Math.abs(this.$holAnimation.node.scale.x) * this.state.meta.AnimationForward, this.$holAnimation.node.scale.y, this.$holAnimation.node.scale.z);else this.$holAnimation.node.setScale(Math.abs(this.$holAnimation.node.scale.x) * -this.state.meta.AnimationForward, this.$holAnimation.node.scale.y, this.$holAnimation.node.scale.z); // 等级渲染

          this.node.getChildByName("State").getChildByName("Lv").getComponent(Label).string = "Lv:" + create.lv; // 状态渲染

          await this.updateUi();
        }
        /** 
         * 更新角色UI
         */


        async updateUi() {
          const StateNode = this.node.getChildByName("State");
          const HpNode = StateNode.getChildByName("Hp");
          const EnergyNode = StateNode.getChildByName("Energy"); // 数据合理化

          this.state.reasonableData(); // 更新生命值

          HpNode.getChildByName("Value").setScale(this.state.hp / this.state.maxHp, HpNode.scale.y, HpNode.scale.z); // 更新能量

          EnergyNode.getChildByName("Value").setScale(this.state.energy / this.state.maxEnergy, EnergyNode.scale.y, EnergyNode.scale.z); // 显示buff

          const hasDrawBuff = [];
          const BuffIconNode = StateNode.getChildByName("BuffIcon");
          BuffIconNode.removeAllChildren();

          for (const buff of this.state.buff) {
            if (hasDrawBuff.indexOf(buff.id) !== -1) continue;
            const node = new Node();
            const sprite = node.addComponent(Sprite);
            sprite.spriteFrame = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
              error: Error()
            }), util) : util).bundle.load(buff.meta.buffIcon, SpriteFrame);
            node.getComponent(UITransform).setContentSize(new math.Size(28, 28));
            BuffIconNode.addChild(node);
            hasDrawBuff.push(buff.id);
          } // 是否死亡


          if (this.state.hp <= 0) await this.dead();
        }
        /** 
         * 行动函数
         */


        async action() {
          const actionState = new (_crd && ActionState === void 0 ? (_reportPossibleCrUseOfActionState({
            error: Error()
          }), ActionState) : ActionState)();
          if (this.state.energy >= this.state.maxEnergy) actionState.actionMethod = "skill"; // 所有行动之前的回调

          for (const buff of this.state.buff) await buff.BeforeAction(buff, actionState, this.$fightMap);

          for (const equipment of this.state.equipment) await equipment.BeforeAction(equipment, actionState, this.$fightMap);

          await this.state.BeforeAction(this.state, actionState, this.$fightMap); // 设置最高绘制顺序

          const ordinarySibling = this.node.getSiblingIndex();
          this.node.setSiblingIndex(9999); // 行动

          if (actionState.actionMethod === "attack" && actionState.canAction) {
            for (const buff of this.state.buff) await buff.OnAttack(buff, actionState, this.$fightMap);

            for (const equipment of this.state.equipment) await equipment.OnAttack(equipment, actionState, this.$fightMap);

            await this.state.OnAttack(this.state, actionState, this.$fightMap);
            this.state.energy += 20;
          } else if (actionState.actionMethod === "skill" && actionState.canAction) {
            for (const buff of this.state.buff) await buff.OnSkill(buff, actionState, this.$fightMap);

            for (const equipment of this.state.equipment) await equipment.OnSkill(equipment, actionState, this.$fightMap);

            await this.state.OnSkill(this.state, actionState, this.$fightMap);
            this.state.energy = 0;
          } // 更新ui


          await this.updateUi(); // 还原绘制顺序

          this.node.setSiblingIndex(ordinarySibling); // 行动之后的函数

          for (const buff of this.state.buff) await buff.AfterAction(buff, this.$fightMap);

          for (const equipment of this.state.equipment) await equipment.AfterAction(equipment, this.$fightMap);

          await this.state.AfterAction(this.state, this.$fightMap); // 更新ui

          await this.updateUi();
        }
        /** 
         * 攻击函数
         * hurt 造成伤害值
         * targte 目标
         */


        async attack(hurt, targte) {
          const targetState = new (_crd && OnBeTarget === void 0 ? (_reportPossibleCrUseOfOnBeTarget({
            error: Error()
          }), OnBeTarget) : OnBeTarget)();
          targetState.origin = this.state;
          targetState.cure = 0 * this.state.curePercent;
          targetState.hurt = hurt * this.state.hurtPercent * (_crd && getCampHurtPercent === void 0 ? (_reportPossibleCrUseOfgetCampHurtPercent({
            error: Error()
          }), getCampHurtPercent) : getCampHurtPercent)(this.state.meta.CharacterCamp, targte.state.meta.CharacterCamp);
          targetState.buff = []; // 10%数据波动

          targetState.cure += math.randomRange(-0.1, 0.1) * targetState.cure;
          targetState.hurt += math.randomRange(-0.1, 0.1) * targetState.hurt; // 护甲穿透生效

          const pierceRate = 1 - targte.state.pierce / (targte.state.pierce + 1000);
          const reduceInjury = targte.state.defence * pierceRate / (targte.state.defence * pierceRate + 700);
          targetState.hurt -= targetState.hurt * reduceInjury;
          targetState.hurt = Math.max(targetState.hurt - targte.state.defence * 0.1, 1); // 免伤

          targetState.hurt *= 1 - targte.state.FreeInjuryPercent; // 暴击概率

          if (this.state.critical > math.randomRange(0, 100)) {
            targetState.critical = true;
            targetState.hurt *= 1.8;
          } // 概率格挡


          if (targte.state.block > Math.random() * 100) {
            targetState.block = true;
            targetState.hurt *= 0.5;
          } // 对方所有被伤害回调


          for (const equipment of targte.state.equipment) await equipment.OnBeHurt(equipment, targetState, this.$fightMap);

          for (const buff of targte.state.buff) await buff.OnBeHurt(buff, targetState, this.$fightMap);

          await targte.state.OnBeHurt(targte.state, targetState, this.$fightMap); // 播放对方受到攻击动画

          if (this.$fightMap.isPlayAnimation && !targetState.block) {
            const hurtPromise = targte.$holAnimation.playAnimation("hurt", 1, targte.defaultState);
            this.$fightMap.actionAwaitQueue.push(hurtPromise);
          }

          targte.state.energy += 10; // 结算

          await targte.executeTargetState(targetState); // 更新ui

          await this.updateUi();
          await targte.updateUi();
        }
        /** 
         * 治疗函数
         * cure 治疗值
         * targte 目标
         */


        async cure(cure, targte) {
          const targetState = new (_crd && OnBeTarget === void 0 ? (_reportPossibleCrUseOfOnBeTarget({
            error: Error()
          }), OnBeTarget) : OnBeTarget)();
          targetState.origin = this.state;
          targetState.cure = cure * this.state.curePercent;
          targetState.hurt = 0 * this.state.hurtPercent;
          targetState.buff = []; // 10%数据波动

          targetState.cure += math.randomRange(-0.1, 0.1) * targetState.cure;
          targetState.hurt += math.randomRange(-0.1, 0.1) * targetState.hurt; // 对方所有被治疗回调

          for (const equipment of targte.state.equipment) await equipment.OnBeCure(equipment, targetState, this.$fightMap);

          for (const buff of targte.state.buff) await buff.OnBeCure(buff, targetState, this.$fightMap);

          await targte.state.OnBeCure(targte.state, targetState, this.$fightMap); // 结束

          await targte.executeTargetState(targetState); // 更新ui

          await this.updateUi();
          await targte.updateUi();
        }
        /** 
         * 死亡函数
         * 死亡时调用
         */


        async dead() {
          const index = this.$fightMap.allLiveCharacter.indexOf(this);
          if (index !== -1) this.$fightMap.allLiveCharacter.splice(index, 1);
          this.$fightMap.allDeadCharacter.push(this);
          const awaitPromise = this.holAnimation.playAnimation("dead", 1, this.defaultState);
          this.$fightMap.actionAwaitQueue.push(awaitPromise.then(() => {
            this.node.active = false;
            return new Promise(async res => {
              for (const buff of this.state.buff) await buff.OnDead(buff, this.$fightMap);

              for (const equipment of this.state.equipment) await equipment.OnDead(equipment, this.$fightMap);

              await this.state.OnDead(this.state, this.$fightMap);
              res();
            });
          }));
        }
        /** 
         * 重生函数
         * 调用后角色重生
         */


        async rebirth() {
          const index = this.$fightMap.allDeadCharacter.indexOf(this);
          if (index !== -1) this.$fightMap.allDeadCharacter.splice(index, 1);
          this.$fightMap.allLiveCharacter.push(this);
          const awaitPromise = this.holAnimation.playAnimation("rebirth", 1, this.defaultState);
          this.node.active = true;
          if (this.state.hp <= 0) this.state.hp = 1;
          return new Promise(res => {
            this.$fightMap.actionAwaitQueue.push(awaitPromise.then(async () => {
              for (const buff of this.state.buff) await buff.onReBirth(buff, this.$fightMap);

              for (const equipment of this.state.equipment) await equipment.onReBirth(equipment, this.$fightMap);

              await this.state.onReBirth(this.state, this.$fightMap);
              res();
            }));
          });
        }
        /** 
         * 添加buff函数
         * @param origin 施加者
         * @param buff 对应的buff
         */


        async addBuff(origin, buff) {
          const targetState = new (_crd && OnBeTarget === void 0 ? (_reportPossibleCrUseOfOnBeTarget({
            error: Error()
          }), OnBeTarget) : OnBeTarget)();
          targetState.origin = origin.state;
          targetState.buff.push(buff); // 调用所有角色的被设置buff函数

          await this.state.OnBuff(this.state, targetState, this.$fightMap); // 调用所有装备的被设置buff函数

          for (const equipment of this.state.equipment) await equipment.OnBuff(equipment, targetState, this.$fightMap); // 调用所有buff的被设置buff函数


          for (const buff of this.state.buff) await buff.OnBuff(buff, targetState, this.$fightMap); // 最后执行target state


          await this.executeTargetState(targetState);
        }
        /** 
         * 删除buff函数
         * @param buff 对应的buff
         */


        async deleteBuff(buff) {
          const index = this.state.buff.indexOf(buff);
          if (index === -1) return;
          this.state.buff[index].OnDeleteFromCharacter(this.state.buff[index]);
          this.state.buff.splice(index, 1);
          await this.updateUi();
        }
        /** 
         * 结算on be target对象
         * @param targetState 结算对象
         */


        async executeTargetState(targetState) {
          // 显示格挡
          if (targetState.block && this.$fightMap.isPlayAnimation) {
            await this.showString("格挡");
            await this.showString("-" + Math.ceil(targetState.hurt));
          } // 显示数值
          else if (this.$fightMap.isPlayAnimation && targetState.hurt) {
            if (targetState.critical) this.showNumber(-targetState.hurt, new math.Color(220, 70, 70, 255), 40);else this.showNumber(-targetState.hurt, new math.Color(200, 200, 200, 255), 25);
          }

          if (this.$fightMap.isPlayAnimation && targetState.cure) this.showNumber(+targetState.cure, new math.Color(50, 220, 50, 255), 25);
          this.state.hp -= targetState.hurt;
          this.state.hp += targetState.cure;

          for (const b of targetState.buff) {
            b.character = this.state;
            await b.OnAddToCharacter(b);
            this.state.buff.push(b);
          }
        }
        /** 
         * 显示数值
         * num 为数值
         * color 是颜色
         */


        async showNumber(num, color, size = 28) {
          const holNumberNodePool = (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).resource.getNodePool(await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load("prefab/HolNumber", Prefab));
          const numberNode = holNumberNodePool.get();
          const holNumber = numberNode.getComponent(_crd && HolNumber === void 0 ? (_reportPossibleCrUseOfHolNumber({
            error: Error()
          }), HolNumber) : HolNumber);
          holNumber.color = color;
          holNumber.frontSize = size;
          holNumber.number = num;
          this.node.addChild(numberNode);
          const ordinarySibling = numberNode.getSiblingIndex();
          numberNode.setSiblingIndex(9999);
          return new Promise(res => {
            let i = 0;
            const inter = setInterval(() => {
              if (++i > 45) {
                res();
                holNumberNodePool.put(numberNode);
                numberNode.setSiblingIndex(ordinarySibling);
                numberNode.setPosition(0, 0, numberNode.position.z);
                return clearInterval(inter);
              }

              numberNode.setPosition(numberNode.position.x, numberNode.position.y + 3, numberNode.position.z);
            }, 20 / this.$holAnimation.timeScale);
          });
        }
        /** 
         * 显示文字
         * str 是显示文件
         */


        async showString(str) {
          if (!this.$fightMap.isPlayAnimation) return;
          const node = new Node();
          const label = node.addComponent(Label);
          label.font = await (_crd && util === void 0 ? (_reportPossibleCrUseOfutil({
            error: Error()
          }), util) : util).bundle.load("font/font_title", Font);
          label.string = str;
          label.fontSize = 30;
          this.node.addChild(node);
          let index = 0;
          const inter = setInterval(() => {
            if (index++ > 45) {
              clearInterval(inter);
              this.node.removeChild(node);
              return;
            }

            node.setPosition(node.position.x, node.position.y + 2, node.position.z);
          }, 20 / this.$holAnimation.timeScale);
          return new Promise(res => setTimeout(res, 100));
        }
        /**
         * 根据一个数组过滤所有队友
         */


        getFriends(all) {
          return all.filter(c => c.direction === this.direction);
        }
        /**
         * 根据一个数组过滤所有敌人
         */


        getEnimies(all) {
          return all.filter(c => c.direction !== this.direction);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b96e9ea42b87763ba877a221ffce0b174294428.js.map