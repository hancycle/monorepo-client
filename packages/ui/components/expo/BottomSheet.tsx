import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useRef, useCallback, ReactNode, RefObject } from "react";
import { StyleSheet } from "react-native";

type BottomSheetProps = {
  children: ReactNode; // 바텀시트 내부 컨텐츠
  trigger?: ReactNode; // 바텀시트를 열 트리거 컴포넌트 (선택적)
  bottomSheetRef?: RefObject<BottomSheetModal>;
};

function BottomSheet({ children, trigger, bottomSheetRef }: BottomSheetProps) {
  const innerRef = useRef<BottomSheetModal>(null);
  const targetRef = bottomSheetRef || innerRef; // 외부 ref가 없으면 내부 ref 사용

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        // appearsOnIndex={0}
        // disappearsOnIndex={-1}
        pressBehavior="close" // 백드롭 클릭 시 바텀시트 닫기
        style={[
          {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        ]}
      />
    ),
    []
  );

  return (
    <>
      {trigger && trigger}
      <BottomSheetModal
        ref={targetRef}
        snapPoints={["25%", "50%", "75%"]}
        // backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.container}>{children}</BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export {
  BottomSheetModalProvider,
  BottomSheetView,
  BottomSheetModal,
  GestureHandlerRootView,
};

export default BottomSheet;
