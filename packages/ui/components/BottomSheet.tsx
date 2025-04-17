import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useCallback, ReactNode, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

type BottomSheetProps = {
  children?: ReactNode; // 바텀시트 내부 컨텐츠
  isOpen?: boolean; // 바텀시트 표시 여부
  onClose?: () => void; // 바텀시트 닫힘 이벤트
  bottomSheetRef?: React.RefObject<BottomSheetModal>; // 선택적으로 ref 사용 가능
};

function BottomSheet({
  children,
  isOpen = true,
  onClose,
  bottomSheetRef: externalRef,
}: BottomSheetProps) {
  const internalRef = useRef<BottomSheetModal>(null);
  const bottomSheetRef = externalRef || internalRef;

  // 바텀시트 닫힘 이벤트 핸들러
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1 && onClose) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [isOpen, bottomSheetRef]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        pressBehavior="close" // 백드롭 클릭 시 바텀시트 닫기
        style={[
          {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        ]}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      style={[styles.container]}
      ref={bottomSheetRef}
      snapPoints={["50%"]}
      backdropComponent={renderBackdrop}
      handleComponent={null}
      enablePanDownToClose={false}
      enableContentPanningGesture={false}
      enableHandlePanningGesture={false}
      enableOverDrag={false}
      onChange={handleSheetChanges}
    >
      <View style={styles.sheetWrapper}>
        <BottomSheetView style={[styles.sheet]}>
          <View style={[styles.header]}>
            <Text>헤더</Text>
            <View style={[styles.closeButton]}>
              <Text>X</Text>
            </View>
          </View>
          <View style={[styles.contents]}>{children}</View>
        </BottomSheetView>
      </View>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 468,
    marginLeft: "auto",
    marginRight: "auto",
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  sheetWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  sheet: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "column",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderWidth: 1,
    borderColor: "blue",
    marginTop: 10,
  },
  closeButton: {
    position: "absolute",
    top: 14,
    right: 12,
  },
  contents: {
    flexGrow: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "red",
  },
});

export {
  BottomSheetModalProvider,
  BottomSheetView,
  BottomSheetModal,
  GestureHandlerRootView,
};

export default BottomSheet;
