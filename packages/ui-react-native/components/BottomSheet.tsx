import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useCallback, ReactNode, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Body,
  IconMonoCloseFilled,
} from "@hancycle/ui-react-native/components";
import { ColorSemantic, SizeSemantic } from "@hancycle/ui-react-native/tokens";

type BottomSheetProps = {
  title?: string;
  children?: ReactNode; // 바텀시트 내부 컨텐츠
  isOpen?: boolean; // 바텀시트 표시 여부
  onClose?: () => void; // 바텀시트 닫힘 이벤트
};

function BottomSheet({
  title,
  children,
  isOpen = true,
  onClose,
}: BottomSheetProps) {
  const internalRef = useRef<BottomSheetModal>(null);
  const bottomSheetRef = internalRef;

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
            <Body size="B2" style={[styles.headerTitle]}>
              {title}
            </Body>
            <View style={[styles.closeButton]}>
              <IconMonoCloseFilled
                width={24}
                height={24}
                color={ColorSemantic.infoPrimary}
                onPress={onClose}
              />
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
    borderRadius: SizeSemantic.borderRadiusXl,
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
    marginTop: 10,
  },
  headerTitle: {
    color: ColorSemantic.infoPrimary,
  },
  closeButton: {
    position: "absolute",
    top: 14,
    right: 12,
    cursor: "pointer",
  },
  contents: {
    flexGrow: 1,
    padding: SizeSemantic.spacing12,
  },
});

export {
  BottomSheet,
  BottomSheetModalProvider,
  BottomSheetView,
  BottomSheetModal,
  GestureHandlerRootView,
};
