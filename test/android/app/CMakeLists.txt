
cmake_minimum_required(VERSION 3.4.1)

include_directories(../../..)
include_directories(../../../depe/rapidjson/include)
include_directories(../../../depe/sqlite-amalgamation)
include_directories(../../../depe/freetype2/include)
include_directories(../../../depe/tess2/Include)
include_directories(../../../depe/libwebp)
include_directories(../../../depe/libgif/lib)
include_directories(../../../depe/libjpeg-turbo)
include_directories(../../../depe/libpng)
include_directories(../../../depe/libwebp)
include_directories(../../../depe/ffmpeg)
include_directories(../../../depe/tinyxml2)
include_directories(../../../depe/curl/include)
include_directories(../../../node/src)
include_directories(../../../node/deps/cares/include)
include_directories(../../../node/deps/zlib/contrib/minizip)
include_directories(../../../node/deps/openssl/openssl/include)
include_directories(../../../node/deps/uv/include)
include_directories(../../../node/deps/http_parser)
include_directories(../../../v8-link/include)
include_directories(../../../out)
link_directories(src/main/jniLibs/${ANDROID_ABI})
link_directories(../../../out/jniLibs/${ANDROID_ABI})

add_definitions(
   -DDEBUG
   -D__STDC_CONSTANT_MACROS
   -DXX_BUILDING_SHARED
   -DNODE_WANT_INTERNALS=1
   -DHAVE_OPENSSL=1
   -DHAVE_INSPECTOR=1
)

add_definitions(
  -DCHROME_PNG_WRITE_SUPPORT
  -DPNG_USER_CONFIG
)

add_library(ngui-base SHARED
            ../../../android/android.cc
            ../../../ngui/utils/object.cc
            ../../../ngui/utils/string.cc
            ../../../ngui/utils/string-builder.cc
            ../../../ngui/utils/array.cc
            ../../../ngui/utils/codec.cc
            ../../../ngui/utils/error.cc
            ../../../ngui/utils/http.cc
            ../../../ngui/utils/http-uri.cc
            ../../../ngui/utils/http-helper.cc
            ../../../ngui/utils/fs.cc
            ../../../ngui/utils/fs-file.cc
            ../../../ngui/utils/fs-sync.cc
            ../../../ngui/utils/fs-async.cc
            ../../../ngui/utils/fs-search.cc
            ../../../ngui/utils/fs-reader.cc
            ../../../ngui/utils/buffer.cc
            ../../../ngui/utils/json.cc
            ../../../ngui/utils/map.cc
            ../../../ngui/utils/util.cc
            ../../../ngui/utils/zlib.cc
            ../../../ngui/utils/loop.cc
            ../../../ngui/utils/loop-private.cc
            ../../../ngui/utils/jsx.cc
            ../../../ngui/utils/sys.cc
            ../../../ngui/utils/net.cc
            ../../../ngui/utils/cb.cc
            ../../../ngui/utils/date.cc
            ../../../ngui/utils/http-cookie.cc
            ../../../ngui/utils/localstorage.cc
            ../../../ngui/utils/android-jni.cc
            ../../../ngui/utils/android-log.cc
            ../../../ngui/utils/android-sys.cc
            ../../../ngui/utils/android-fs.cc
           )

add_library(ngui-gui SHARED
            ../../../out/glsl-sprite.cc
            ../../../out/glsl-box-image.cc
            ../../../out/glsl-box-yuv420p-image.cc
            ../../../out/glsl-box-yuv420sp-image.cc
            ../../../out/glsl-box-border.cc
            ../../../out/glsl-box-color.cc
            ../../../out/glsl-box-shadow.cc
            ../../../out/glsl-box-image-radius.cc
            ../../../out/glsl-box-border-radius.cc
            ../../../out/glsl-box-color-radius.cc
            ../../../out/glsl-text-box-color.cc
            ../../../out/glsl-text-texture.cc
            ../../../out/glsl-text-vertex.cc
            ../../../out/glsl-gen-texture.cc
            ../../../out/font-native.cc
            ../../../ngui/action.cc
            ../../../ngui/app.cc
            ../../../ngui/audio-player.cc
            ../../../ngui/div.cc
            ../../../ngui/indep.cc
            ../../../ngui/gradient.cc
            ../../../ngui/box-shadow.cc
            ../../../ngui/limit.cc
            ../../../ngui/limit-indep.cc
            ../../../ngui/image.cc
            ../../../ngui/bezier.cc
            ../../../ngui/event.cc
            ../../../ngui/display-port.cc
            ../../../ngui/font/font.cc
            ../../../ngui/image/codec.cc
            ../../../ngui/image/codec-tga.cc
            ../../../ngui/image/codec-pvrtc.cc
            ../../../ngui/pre-render.cc
            ../../../ngui/mathe.cc
            ../../../ngui/media-codec.cc
            ../../../ngui/media-codec-1.cc
            ../../../ngui/media-codec-software.cc
            ../../../ngui/label.cc
            ../../../ngui/layout.cc
            ../../../ngui/box.cc
            ../../../ngui/text-rows.cc
            ../../../ngui/view.cc
            ../../../ngui/draw.cc
            ../../../ngui/gl/gl.cc
            ../../../ngui/gl/gl-draw.cc
            ../../../ngui/gl/gl-texture.cc
            ../../../ngui/gl/gl-font.cc
            ../../../ngui/root.cc
            ../../../ngui/sprite.cc
            ../../../ngui/scroll.cc
            ../../../ngui/span.cc
            ../../../ngui/hybrid.cc
            ../../../ngui/text-font.cc
            ../../../ngui/text-node.cc
            ../../../ngui/texture.cc
            ../../../ngui/video.cc
            ../../../ngui/value.cc
            ../../../ngui/select-panel.cc
            ../../../ngui/button.cc
            ../../../ngui/keyboard.cc
            ../../../ngui/css.cc
            ../../../ngui/property.cc
            ../../../ngui/text.cc
            ../../../ngui/clip.cc
            ../../../ngui/input.cc
            ../../../ngui/textarea.cc
            ../../../ngui/platforms/android-gl.cc
            ../../../ngui/platforms/android-app.cc
            ../../../ngui/platforms/android-media-codec.cc
            ../../../ngui/platforms/android-pcm-player.cc
            ../../../ngui/platforms/android-pcm-audio-track.cc
            ../../../ngui/platforms/android-keyboard.cc
            ../../../ngui/image/codec-gif.cc
            ../../../ngui/image/codec-jpeg.cc
            ../../../ngui/image/codec-png.cc
            ../../../ngui/image/codec-webp.cc
          )

add_library(ngui-js SHARED
            ../../../out/native-core-js.cc
            ../../../ngui/js/js.cc
            ../../../ngui/js/js-class.cc
            ../../../ngui/js/test.cc
            ../../../ngui/js/v8.cc
            ../../../ngui/js/v8.cc
            ../../../ngui/js/log.cc
            ../../../ngui/js/binding/utils/event.cc
            ../../../ngui/js/binding/utils/reader.cc
            ../../../ngui/js/binding/utils/fs.cc
            ../../../ngui/js/binding/utils/http.cc
            ../../../ngui/js/binding/utils/json.cc
            ../../../ngui/js/binding/utils/keys.cc
            ../../../ngui/js/binding/utils/storage.cc
            ../../../ngui/js/binding/utils/sys.cc
            ../../../ngui/js/binding/utils/util.cc
            ../../../ngui/js/binding/action.cc
            ../../../ngui/js/binding/app.cc
            ../../../ngui/js/binding/audio-player.cc
            ../../../ngui/js/binding/box.cc
            ../../../ngui/js/binding/button.cc
            ../../../ngui/js/binding/clip.cc
            ../../../ngui/js/binding/css.cc
            ../../../ngui/js/binding/display-port.cc
            ../../../ngui/js/binding/div.cc
            ../../../ngui/js/binding/font.cc
            ../../../ngui/js/binding/ngui.cc
            ../../../ngui/js/binding/hybrid.cc
            ../../../ngui/js/binding/image.cc
            ../../../ngui/js/binding/indep.cc
            ../../../ngui/js/binding/input.cc
            ../../../ngui/js/binding/label.cc
            ../../../ngui/js/binding/layout.cc
            ../../../ngui/js/binding/limit.cc
            ../../../ngui/js/binding/media.cc
            ../../../ngui/js/binding/root.cc
            ../../../ngui/js/binding/scroll.cc
            ../../../ngui/js/binding/select-panel.cc
            ../../../ngui/js/binding/span.cc
            ../../../ngui/js/binding/sprite.cc
            ../../../ngui/js/binding/text-font.cc
            ../../../ngui/js/binding/text-node.cc
            ../../../ngui/js/binding/text.cc
            ../../../ngui/js/binding/value.cc
            ../../../ngui/js/binding/video.cc
            ../../../ngui/js/binding/view.cc
          )

add_library(ngui-demo SHARED ../../../test/demo.cc)

add_library(ngui-test SHARED
            ../../../test/test.cc
            ../../../test/test-fs.cc
            ../../../test/test-fs2.cc
            ../../../test/test-gui.cc
            ../../../test/test-freetype.cc
            ../../../test/test-json.cc
            ../../../test/test-string.cc
            ../../../test/test-list.cc
            ../../../test/test-map.cc
            ../../../test/test-event.cc
            ../../../test/test-zlib.cc
            ../../../test/test-curl.cc
            ../../../test/test-curl2.cc
            ../../../test/test-http.cc
            ../../../test/test-https.cc
            ../../../test/test-thread.cc
            ../../../test/test-ffmpeg.cc
            ../../../test/test-number.cc
            ../../../test/test-uv.cc
            ../../../test/test-net.cc
            ../../../test/test-fs-async.cc
            ../../../test/test-ssl.cc
            ../../../test/test-http2.cc
            ../../../test/test-net-ssl.cc
            ../../../test/test-http-cookie.cc
            ../../../test/test-localstorage.cc
            ../../../test/test-buffer.cc
            ../../../test/test-ngui.cc
            ../../../test/test-demo.cc
            ../../../test/test-jsc.cc
            ../../../test/test-v8.cc
            ../../../test/test-loop.cc
            ../../../test/test-sys.cc
            ../../../test/test-mutex.cc
            ../../../test/test-ios-run-loop.cc
            ../../../test/test-benchmark.cc
)

target_link_libraries(ngui-base atomic z android log ngui_depes)
target_link_libraries(ngui-gui  ngui-base OpenSLES GLESv3 EGL mediandk ngui_depes)
target_link_libraries(ngui-js   ngui-base ngui-gui ngui_depes)
target_link_libraries(ngui-demo ngui-base ngui-gui ngui-js ngui_depes)
target_link_libraries(ngui-test ngui-base ngui-gui ngui-js ngui_depes)
