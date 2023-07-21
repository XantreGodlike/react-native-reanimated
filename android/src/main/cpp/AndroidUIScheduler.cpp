#include "AndroidUIScheduler.h"

#include <android/log.h>
#include <fbjni/fbjni.h>
#include <jsi/jsi.h>

#include <memory>
#include <string>
#include <utility>

namespace reanimated {

using namespace facebook;
using namespace react;

class UISchedulerWrapper : public UIScheduler {
 private:
  jni::global_ref<AndroidUIScheduler::javaobject> scheduler_;

 public:
  explicit UISchedulerWrapper(
      jni::global_ref<AndroidUIScheduler::javaobject> scheduler)
      : scheduler_(scheduler) {}

  void scheduleOnUI(std::function<void()> &&job) override {
    UIScheduler::scheduleOnUI(std::move(job));
    if (!scheduledOnUI_) {
      scheduledOnUI_ = true;
      scheduler_->cthis()->scheduleTriggerOnUI();
    }
  }

  ~UISchedulerWrapper() {}
};

AndroidUIScheduler::AndroidUIScheduler(
    jni::alias_ref<AndroidUIScheduler::javaobject> jThis)
    : javaPart_(jni::make_global(jThis)),
      uiScheduler_(new UISchedulerWrapper(jni::make_global(jThis))) {}

jni::local_ref<AndroidUIScheduler::jhybriddata> AndroidUIScheduler::initHybrid(
    jni::alias_ref<jhybridobject> jThis) {
  return makeCxxInstance(jThis);
}

void AndroidUIScheduler::triggerUI() {
  uiScheduler_->triggerUI();
}

void AndroidUIScheduler::scheduleTriggerOnUI() {
  static const auto method =
      javaPart_->getClass()->getMethod<void()>("scheduleTriggerOnUI");
  method(javaPart_.get());
}

void AndroidUIScheduler::registerNatives() {
  registerHybrid({
      makeNativeMethod("initHybrid", AndroidUIScheduler::initHybrid),
      makeNativeMethod("triggerUI", AndroidUIScheduler::triggerUI),
  });
}

} // namespace reanimated
